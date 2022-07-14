<?php 

class Participa{

    private $idEquipo;
    private $idDeporte;

    function __construct($idEquipo, $idDeporte)
    {
        $this->idEquipo=$idEquipo;
        $this->idDeporte=$idDeporte;
    }

    /**
     * Get the value of idEquipo
     */ 
    public function getIdEquipo()
    {
        return $this->idEquipo;
    }

    /**
     * Set the value of idEquipo
     *
     * @return  self
     */ 
    public function setIdEquipo($idEquipo)
    {
        $this->idEquipo = $idEquipo;

        return $this;
    }

    /**
     * Get the value of idDeporte
     */ 
    public function getIdDeporte()
    {
        return $this->idDeporte;
    }

    /**
     * Set the value of idDeporte
     *
     * @return  self
     */ 
    public function setIdDeporte($idDeporte)
    {
        $this->idDeporte = $idDeporte;

        return $this;
    }
}

?>