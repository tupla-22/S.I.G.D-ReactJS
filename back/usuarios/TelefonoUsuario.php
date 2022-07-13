<?php 


class TelefonoUsuario{

    private $ci;
    private $telefono;


    function __construct(string $ci, string $telefono)
    {
        $this->ci=$ci;
        $this->telefono=$telefono;
    }

    

    /**
     * Get the value of ci
     */ 
    public function getCi()
    {
        return $this->ci;
    }

    /**
     * Set the value of ci
     *
     * @return  self
     */ 
    public function setCi($ci)
    {
        $this->ci = $ci;

        return $this;
    }

    /**
     * Get the value of telefono
     */ 
    public function getTelefono()
    {
        return $this->telefono;
    }

    /**
     * Set the value of telefono
     *
     * @return  self
     */ 
    public function setTelefono($telefono)
    {
        $this->telefono = $telefono;

        return $this;
    }
}



?>