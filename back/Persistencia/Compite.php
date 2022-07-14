<?php

class Compite{

    private $idCampeonato;
    private $idEquipo;

    function __construct($idCampeonato, $idEquipo)
    {
        $this->idCampeonato=$idCampeonato;
        $this->idEquipo=$idEquipo;
    }

    /**
     * Get the value of idCampeonato
     */ 
    public function getIdCampeonato()
    {
        return $this->idCampeonato;
    }

    /**
     * Set the value of idCampeonato
     *
     * @return  self
     */ 
    public function setIdCampeonato($idCampeonato)
    {
        $this->idCampeonato = $idCampeonato;

        return $this;
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
}

?>