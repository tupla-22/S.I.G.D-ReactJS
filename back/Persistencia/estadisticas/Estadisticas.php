<?php 

class Estadisticas{

    private $id;
    private $tipo;
    private $fecha;
    private $idJugador;
    private $idEquipo;

    function __construct(
        $id,
        $tipo,
        $fecha,
        $idJugador,
        $idEquipo,
    )
    {
        $this->id=$id;
        $this->tipo=$tipo;
        $this->fecha=$fecha;
        $this->idJugador=$idJugador;
        $this->idEquipo=$idEquipo;
    }

    /**
     * Get the value of id
     */ 
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set the value of id
     *
     * @return  self
     */ 
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Get the value of tipo
     */ 
    public function getTipo()
    {
        return $this->tipo;
    }

    /**
     * Set the value of tipo
     *
     * @return  self
     */ 
    public function setTipo($tipo)
    {
        $this->tipo = $tipo;

        return $this;
    }

    /**
     * Get the value of fecha
     */ 
    public function getFecha()
    {
        return $this->fecha;
    }

    /**
     * Set the value of fecha
     *
     * @return  self
     */ 
    public function setFecha($fecha)
    {
        $this->fecha = $fecha;

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