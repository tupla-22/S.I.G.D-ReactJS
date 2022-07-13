<?php 


class DirectorTecnico extends Usuario{

    private $carneSalud;

    function __construct(string $carneSalud)
    {
        $this->carneSalud=$carneSalud;
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
}



?>