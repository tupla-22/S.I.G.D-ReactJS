<?php

class Juez extends Usuario{


    private $carneSalud;
    private $certificadoAF;


    function __construc(
        string $carneSalud,
        string $certificadoAF
        )
    {
        $this->carneSalud=$carneSalud;
        $this->certificadoAF=$certificadoAF;
    }




    /**
     * Get the value of carneSalud
     */ 
    public function getCarneSalud()
    {
        return $this->carneSalud;
    }

    /**
     * Set the value of carneSalud
     *
     * @return  self
     */ 
    public function setCarneSalud($carneSalud)
    {
        $this->carneSalud = $carneSalud;

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
}