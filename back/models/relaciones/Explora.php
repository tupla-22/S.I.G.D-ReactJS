<?php

class Explora{

    private $idJugador;
    private $ciOjeador;

    function __construct($idJugador, $ciOjeador)
    {
        $this->idJugador=$idJugador;
        $this->ciOjeador=$ciOjeador;
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

    /**
     * Get the value of ciOjeador
     */ 
    public function getCiOjeador()
    {
        return $this->ciOjeador;
    }

    /**
     * Set the value of ciOjeador
     *
     * @return  self
     */ 
    public function setCiOjeador($ciOjeador)
    {
        $this->ciOjeador = $ciOjeador;

        return $this;
    }
}

?>