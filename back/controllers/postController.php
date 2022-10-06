<?php

require_once "models/postModel.php";
require_once "models/get.model.php";
require_once "models/connection.php";

require_once "vendor/autoload.php";
use Firebase\JWT\JWT; //componente jwt que instale con composer

require_once "models/putModel.php";


class PostController{

    /**================peticion post para crear datos================== */
    static public function postData($table, $data){

        $response= PostModel::postData($table, $data);
        
        $return= new PostController();
        $return -> fncResponse($response, null, null);

    }

    /**================peticion post para registrar usuarios================== */
     static public function postRegister($table, $data, $suffix){
        //$dataSuffix=$data["password_".$suffix];

        if (isset($data["password_".$suffix]) && $data["password_".$suffix]!= null) {

            $crypt = crypt($data["password_".$suffix], 'sha512'); 
            $data["password_".$suffix]= $crypt;
            $data=array_unique($data);
            $response= PostModel::postData($table, $data);
            $return= new PostController();
            $return -> fncResponse($response, null, $suffix);
            
        }else {
        /**================peticion post para registrar usuarios de aplicaciones externas================== */
            
            $response= PostModel::postData($table, $data);
            if (isset($response["comment"]) && $response["comment"] =="The process whas succesful") {

                /**=====================validar que el usuario exisita=========================== */

                
                $response= GetModel::getDataFilter($table, "*", "ci_".$suffix, $data["ci_".$suffix], null, null, null, null);

                if (!empty($response)) {
                    $token= Connection::jwt($response[0]->{"id_".$suffix},$response[0]->{"ci_".$suffix}, );
                    $jwt = JWT::encode($token,"qxewcr",'HS512');
                

                    //------actualizar bd con el token del usuario-------

                    $data = array(
                        "token_".$suffix =>$jwt,
                        "token_exp_".$suffix => $token["exp"]

                    );

                    $update= PutModel::putData($table,$data, $response[0]->{"id_".$suffix},"id_".$suffix);
                    
                    if (isset($update["comment"]) && $update["comment"] =="The process whas succesful") {
                        $response[0]->{"token_".$suffix}= $jwt;
                        $response[0]->{"token_exp_".$suffix}= $token["exp"];

                        $return= new PostController();
                        $return -> fncResponse($response, null, $suffix);

                    }

                }

               
            
            }
        }
       
    }

    /**================peticion post para login usuarios================== */
    static public function postLogin($table, $data, $suffix){
        
        /**=====================validar que el usuario exisita=========================== */

        //$response= GetModel::getDataFilter($table, "*", "email_".$suffix, $data["email_".$suffix], null, null, null, null);
        $response= GetModel::getDataFilter($table, "*", "ci_".$suffix, $data["ci_".$suffix], null, null, null, null);

        if (!empty($response)) {

            if ($response[0]->{"id_".$suffix}!=null) {
                
            
                //------encriptamos contraseña-------
                
                $crypt = crypt($data["password_".$suffix], 'sha512'); 
                
                if($response[0]->{"password_".$suffix}== $crypt){

                    //$rol= ;

                    $token= Connection::jwt($response[0]->{"id_".$suffix},$response[0]->{"ci_".$suffix} );
                    $jwt = JWT::encode($token,"qxewcr",'HS512');
                

                    //------actualizar bd con el token del usuario-------

                    $data = array(
                        "token_".$suffix =>$jwt,
                        "token_exp_".$suffix => $token["exp"]

                    );

                    $update= PutModel::putData($table,$data, $response[0]->{"id_".$suffix},"id_".$suffix);
                    
                    if (isset($update["comment"]) && $update["comment"] =="The process whas succesful") {
                        $response[0]->{"token_".$suffix}= $jwt;
                        $response[0]->{"token_exp_".$suffix}= $token["exp"];

                        $return= new PostController();
                        $return -> fncResponse($response, null, $suffix);
                    }
                    
                    
                }else {
                    $response=null;
                    $return= new PostController();
                    $return -> fncResponse($response, "Wrong password", $suffix);
                }
            }else{

                //------actualizar el token para usuarios logueados por las redes-------

                $token= Connection::jwt($response[0]->{"id_".$suffix},$response[0]->{"ci_".$suffix}, );
                $jwt = JWT::encode($token,"qxewcr",'HS512');
            

                
                $data = array(
                    "token_".$suffix =>$jwt,
                    "token_exp_".$suffix => $token["exp"]

                );

                $update= PutModel::putData($table,$data, $response[0]->{"id_".$suffix},"id_".$suffix);
                
                if (isset($update["comment"]) && $update["comment"] =="The process whas succesful") {
                    $response[0]->{"token_".$suffix}= $jwt;
                    $response[0]->{"token_exp_".$suffix}= $token["exp"];

                    $return= new PostController();
                    $return -> fncResponse($response, null, $suffix);
                }
            }

        }else {
            $response=null;
            $return= new PostController();
            $return -> fncResponse($response, "Wrong email", $suffix);

        }


       
    }

    /**======================respuesta del controlador========================== */

    public function fncResponse($response, $error, $suffix){

        if(!empty($response)){

            //----------quitamos contraseña de la respuesta-----------

            if (isset($response[0]->{"password_".$suffix})) {
                
                unset($response[0]->{"password_".$suffix});
            }

            $json= array(
        
                "status" => 200,
                "result" => $response
            
            
            );

        }else{

            if ($error!=null) {
                $json= array(
        
                    "status" => 400,
                    "result" => $error
                
                
                );
            }else {
                $json= array(
        
                    "status" => 404,
                    "result" => "not found",
                    "method" => "post"
                
                
                );
            }

            

        }

        
        echo json_encode($json, http_response_code($json["status"]));


    }

}