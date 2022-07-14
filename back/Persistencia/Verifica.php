<?php

class Verifica{

    private $idEstadisticas;
    private $ciJuez;

    function __construct($idEstadisticas, $ciJuez)
    {
        $this->idEstadisticas=$idEstadisticas;
        $this->ciJuez=$ciJuez;
    }

    /**
     * Get the value of idEstadisticas
     */ 
    public function getIdEstadisticas()
    {
        return $this->idEstadisticas;
    }

    /**
     * Set the value of idEstadisticas
     *
     * @return  self
     */ 
    public function setIdEstadisticas($idEstadisticas)
    {
        $this->idEstadisticas = $idEstadisticas;

        return $this;
    }

    /**
     * Get the value of ciJuez
     */ 
    public function getCiJuez()
    {
        return $this->ciJuez;
    }

    /**
     * Set the value of ciJuez
     *
     * @return  self
     */ 
    public function setCiJuez($ciJuez)
    {
        $this->ciJuez = $ciJuez;

        return $this;
    }
}

?>