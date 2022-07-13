<?php 

class Equipo{

    private $id;
    private $escudo;
    private $nombre;
    private $ciAdmin;
    private $ciDT;
    private $idLiga;


    function __construct(
        $id,
        $escudo,
        $nombre,
        $ciAdmin,
        $ciDT,
        $idLiga,
    )
    {
        $this->id=$id;
        $this->escudo=$escudo;
        $this->nombre=$nombre;
        $this->ciAdmin=$ciAdmin;
        $this->ciDT=$ciDT;
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
     * Get the value of escudo
     */ 
    public function getEscudo()
    {
        return $this->escudo;
    }

    /**
     * Set the value of escudo
     *
     * @return  self
     */ 
    public function setEscudo($escudo)
    {
        $this->escudo = $escudo;

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
     * Get the value of ciAdmin
     */ 
    public function getCiAdmin()
    {
        return $this->ciAdmin;
    }

    /**
     * Set the value of ciAdmin
     *
     * @return  self
     */ 
    public function setCiAdmin($ciAdmin)
    {
        $this->ciAdmin = $ciAdmin;

        return $this;
    }

    /**
     * Get the value of ciDT
     */ 
    public function getCiDT()
    {
        return $this->ciDT;
    }

    /**
     * Set the value of ciDT
     *
     * @return  self
     */ 
    public function setCiDT($ciDT)
    {
        $this->ciDT = $ciDT;

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