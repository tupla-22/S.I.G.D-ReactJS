<?php 

class Jugador{

    private $id;
    private $certificadoAF;
    private $altura;
    private $peso;
    private $minutosJugados;
    private $numeroCamiseta;
    private $lateralidad;
    private $idEquipo;

    function __construct(
        $id,
        $certificadoAF,
        $altura,
        $peso,
        $minutosJugados,
        $numeroCamiseta,
        $lateralidad,
        $idEquipo,
        
    )
    {
        $this->id=$id;
        $this->certificadoAF=$certificadoAF;
        $this->altura=$altura;
        $this->peso=$peso;
        $this->minutosJugados=$minutosJugados;
        $this->numeroCamiseta=$numeroCamiseta;
        $this->lateralidad=$lateralidad;
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
     * Get the value of certificadoAF
     */ 
    public function getCertificadoAF()
    {
        return $this->certificadoAF;
    }

    /**
     * Set the value of certificadoAF
     *
     * @return  self
     */ 
    public function setCertificadoAF($certificadoAF)
    {
        $this->certificadoAF = $certificadoAF;

        return $this;
    }

    /**
     * Get the value of altura
     */ 
    public function getAltura()
    {
        return $this->altura;
    }

    /**
     * Set the value of altura
     *
     * @return  self
     */ 
    public function setAltura($altura)
    {
        $this->altura = $altura;

        return $this;
    }

    /**
     * Get the value of peso
     */ 
    public function getPeso()
    {
        return $this->peso;
    }

    /**
     * Set the value of peso
     *
     * @return  self
     */ 
    public function setPeso($peso)
    {
        $this->peso = $peso;

        return $this;
    }

    /**
     * Get the value of minutosJugados
     */ 
    public function getMinutosJugados()
    {
        return $this->minutosJugados;
    }

    /**
     * Set the value of minutosJugados
     *
     * @return  self
     */ 
    public function setMinutosJugados($minutosJugados)
    {
        $this->minutosJugados = $minutosJugados;

        return $this;
    }

    /**
     * Get the value of numeroCamiseta
     */ 
    public function getNumeroCamiseta()
    {
        return $this->numeroCamiseta;
    }

    /**
     * Set the value of numeroCamiseta
     *
     * @return  self
     */ 
    public function setNumeroCamiseta($numeroCamiseta)
    {
        $this->numeroCamiseta = $numeroCamiseta;

        return $this;
    }

    /**
     * Get the value of lateralidad
     */ 
    public function getLateralidad()
    {
        return $this->lateralidad;
    }

    /**
     * Set the value of lateralidad
     *
     * @return  self
     */ 
    public function setLateralidad($lateralidad)
    {
        $this->lateralidad = $lateralidad;

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