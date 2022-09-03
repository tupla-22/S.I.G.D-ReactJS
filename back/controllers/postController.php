<?php

require_once "models/postModel.php";

class PostController{

    /**================peticion post para crear datos================== */
    static public function postData($table, $data){

        $response= PostModel::postData($table, $data);
        echo '<pre>'; print_r($response); echo '</pre>';
        return;

    }

}