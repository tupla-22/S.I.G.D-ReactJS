<?php 

class Corresponde{

    private $idPartido;
    private $equipoLocal;
    private $equipoVisita;
    private $puntoLocal;
    private $puntoVisita;
    private $idCampeonato;

    function __construct(
        $idPartido,
        $equipoLocal,
        $equipoVisita,
        $puntoLocal,
        $puntoVisita,
        $idCampeonato,
    )
    {
        $this->idPartido=$idPartido;
        $this->equipoLocal=$equipoLocal;
        $this->equipoVisita=$equipoVisita;
        $this->puntoLocal=$puntoLocal;
        $this->puntoVisita=$puntoVisita;
        $this->idCampeonato=$idCampeonato;
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
     * Get the value of equipoLocal
     */ 
    public function getEquipoLocal()
    {
        return $this->equipoLocal;
    }

    /**
     * Set the value of equipoLocal
     *
     * @return  self
     */ 
    public function setEquipoLocal($equipoLocal)
    {
        $this->equipoLocal = $equipoLocal;

        return $this;
    }

    /**
     * Get the value of equipoVisita
     */ 
    public function getEquipoVisita()
    {
        return $this->equipoVisita;
    }

    /**
     * Set the value of equipoVisita
     *
     * @return  self
     */ 
    public function setEquipoVisita($equipoVisita)
    {
        $this->equipoVisita = $equipoVisita;

        return $this;
    }

    /**
     * Get the value of puntoLocal
     */ 
    public function getPuntoLocal()
    {
        return $this->puntoLocal;
    }

    /**
     * Set the value of puntoLocal
     *
     * @return  self
     */ 
    public function setPuntoLocal($puntoLocal)
    {
        $this->puntoLocal = $puntoLocal;

        return $this;
    }

    /**
     * Get the value of puntoVisita
     */ 
    public function getPuntoVisita()
    {
        return $this->puntoVisita;
    }

    /**
     * Set the value of puntoVisita
     *
     * @return  self
     */ 
    public function setPuntoVisita($puntoVisita)
    {
        $this->puntoVisita = $puntoVisita;

        return $this;
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
}

?>