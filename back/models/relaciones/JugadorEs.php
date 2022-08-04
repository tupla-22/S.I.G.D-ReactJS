<?php

class JugadorEs{

    private $ciEstudiante;
    private $idJugador;

    function __construct($ciEstudiante, $idJugador)
    {
        $this->ciEstudiante=$ciEstudiante;
        $this->idJugador=$idJugador;
    }

    /**
     * Get the value of ciEstudiante
     */ 
    public function getCiEstudiante()
    {
        return $this->ciEstudiante;
    }

    /**
     * Set the value of ciEstudiante
     *
     * @return  self
     */ 
    public function setCiEstudiante($ciEstudiante)
    {
        $this->ciEstudiante = $ciEstudiante;

        return $this;
    }

    /**
     * Get the value of idJugador
     */ 
    public function getIdJugador()
    {
        return $this->idJugador;
    }

    /**
     * Set the value of idJugador
     *
     * @return  self
     */ 
    public function setIdJugador($idJugador)
    {
        $this->idJugador = $idJugador;

        return $this;
    }
}

?>