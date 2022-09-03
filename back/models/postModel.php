<?php

class PostModel{

    /** ==================peticion post para crear datos de forma dinamica=====================*/

    static public function postData($table, $data){
        
        echo '<pre>'; print_r($table); echo '</pre>';
        echo '<pre>'; print_r($data); echo '</pre>';

    }
}