<?php 

class Posicion{

    private $posicion;
    private $idJugador;

    function __construct($posicion,$idJugador)
    {
        $this->posicion=$posicion;
        $this->idJugador=$idJugador;
    }

    /**
     * Get the value of posicion
     */ 
    public function getPosicion()
    {
        return $this->posicion;
    }

    /**
     * Set the value of posicion
     *
     * @return  self
     */ 
    public function setPosicion($posicion)
    {
        $this->posicion = $posicion;

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