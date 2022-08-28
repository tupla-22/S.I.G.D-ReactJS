<?php

class Anota{

    private $idEstadisticas;
    private $ciAnalista;

    function __construct($idEstadisticas, $ciAnalista)
    {
        $this->idEstadisticas=$idEstadisticas;
        $this->ciAnalista=$ciAnalista;
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
     * Get the value of ciAnalista
     */ 
    public function getCiAnalista()
    {
        return $this->ciAnalista;
    }

    /**
     * Set the value of ciAnalista
     *
     * @return  self
     */ 
    public function setCiAnalista($ciAnalista)
    {
        $this->ciAnalista = $ciAnalista;

        return $this;
    }
}

?>