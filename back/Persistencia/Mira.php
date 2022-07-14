<?php 

class Mira{

    private $idPartido;
    private $ciAnalista;

    function __construct($idPartido,$ciAnalista)
    {
        $this->idPartido=$idPartido;
        $this->ciAnalista=$ciAnalista;
    }

    /**
     * Get the value of idPartido
     */ 
    public function getIdPartido()
    {
        return $this->idPartido;
    }

    /**
     * Set the value of idPartido
     *
     * @return  self
     */ 
    public function setIdPartido($idPartido)
    {
        $this->idPartido = $idPartido;

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