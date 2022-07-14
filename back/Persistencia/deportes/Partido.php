<?php 

class Partido{
    private $id;
    private $equipoLocal;
    private $equipoVisita;
    private $fecha;
    private $anotacionLocal;
    private $anotacionVisita;
    private $tipo;

    function __construct(
        $id,
        $equipoLocal,
        $equipoVisita,
        $fecha,
        $anotacionLocal,
        $anotacionVisita,
        $tipo,
    )
    {
        $this->id=$id;
        $this->equipoLocal=$equipoLocal;
        $this->equipoVisita=$equipoVisita;
        $this->fecha=$fecha;
        $this->anotacionLocal=$anotacionLocal;
        $this->anotacionVisita=$anotacionVisita;
        $this->tipo=$tipo;
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
     * Get the value of anotacionLocal
     */ 
    public function getAnotacionLocal()
    {
        return $this->anotacionLocal;
    }

    /**
     * Set the value of anotacionLocal
     *
     * @return  self
     */ 
    public function setAnotacionLocal($anotacionLocal)
    {
        $this->anotacionLocal = $anotacionLocal;

        return $this;
    }

    /**
     * Get the value of anotacionVisita
     */ 
    public function getAnotacionVisita()
    {
        return $this->anotacionVisita;
    }

    /**
     * Set the value of anotacionVisita
     *
     * @return  self
     */ 
    public function setAnotacionVisita($anotacionVisita)
    {
        $this->anotacionVisita = $anotacionVisita;

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
}


?>