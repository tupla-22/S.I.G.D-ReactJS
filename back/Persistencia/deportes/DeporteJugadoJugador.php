<?php

class DeporteJugadoJugador{

    private $deporteJugado;
    private $idJugador;

    function __construct($deporteJugado, $idJugador)
    {
        $this->deporteJugado=$deporteJugado;
        $this->idJugador=$idJugador;
    }

    /**
     * Get the value of deporteJugado
     */ 
    public function getDeporteJugado()
    {
        return $this->deporteJugado;
    }

    /**
     * Set the value of deporteJugado
     *
     * @return  self
     */ 
    public function setDeporteJugado($deporteJugado)
    {
        $this->deporteJugado = $deporteJugado;

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