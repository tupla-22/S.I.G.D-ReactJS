<?php 

class Estudiante extends Usuario{

    private $carneSalud;
    private $idGrupo;

    function __construct(
        string $carneSalud,
        string $idGrupo, 
        
        )//__metodos magicos
    {
        $this->carneSalud=$carneSalud;// this hace referencia al id de esta persona, porque se pueden crear varias pero cada una tiene su id
        $this->idGrupo=$idGrupo;
        
    }




        /**
         * Get the value of carneSalud
         */ 
        public function getCarneSalud()
        {
                return $this->carneSalud;
        }

        /**
         * Set the value of carneSalud
         *
         * @return  self
         */ 
        public function setCarneSalud($carneSalud)
        {
                $this->carneSalud = $carneSalud;

                return $this;
        }

        /**
         * Get the value of idGrupo
         */ 
        public function getIdGrupo()
        {
                return $this->idGrupo;
        }

        /**
         * Set the value of idGrupo
         *
         * @return  self
         */ 
        public function setIdGrupo($idGrupo)
        {
                $this->idGrupo = $idGrupo;

                return $this;
        }
}


?>