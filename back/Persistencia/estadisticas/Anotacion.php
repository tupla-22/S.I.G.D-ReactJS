<?php 

class Anotacion extends Estadisticas{

    private $valorTanto;

    function __construct(int $valorTanto)
    {
        $this->valorTanto=$valorTanto;
    }

    /**
     * Get the value of valorTanto
     */ 
    public function getValorTanto()
    {
        return $this->valorTanto;
    }

    /**
     * Set the value of valorTanto
     *
     * @return  self
     */ 
    public function setValorTanto($valorTanto)
    {
        $this->valorTanto = $valorTanto;

        return $this;
    }
}

?>