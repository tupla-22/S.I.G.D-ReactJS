<?php 

class Campeonato{

    private $id;
    private $campeon;
    private $tipo;
    private $nombre;
    private $idLiga;


    function __construct(
        $id,
        $campeon,
        $tipo,
        $nombre,
        $idLiga
    )
    {
        $this->id=$id;
        $this->campeon=$campeon;
        $this->tipo=$tipo;
        $this->nombre=$nombre;
        $this->idLiga=$idLiga;
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
     * Get the value of campeon
     */ 
    public function getCampeon()
    {
        return $this->campeon;
    }

    /**
     * Set the value of campeon
     *
     * @return  self
     */ 
    public function setCampeon($campeon)
    {
        $this->campeon = $campeon;

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
     * Get the value of nombre
     */ 
    public function getNombre()
    {
        return $this->nombre;
    }

    /**
     * Set the value of nombre
     *
     * @return  self
     */ 
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;

        return $this;
    }

    /**
     * Get the value of idLiga
     */ 
    public function getIdLiga()
    {
        return $this->idLiga;
    }

    /**
     * Set the value of idLiga
     *
     * @return  self
     */ 
    public function setIdLiga($idLiga)
    {
        $this->idLiga = $idLiga;

        return $this;
    }
}



?>