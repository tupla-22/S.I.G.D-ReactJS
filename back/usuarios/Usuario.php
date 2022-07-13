<?php 

class Usuario{

    private $ci;
    private $primerNombre;
    private $segundoNombre;
    private $primerApellido;
    private $segundoApellido;
    private $email;
    private $fechaNac;
    private $contrasenna;
    private $verificado;

    function __construct(
        string $ci,
        string $primerNombre, 
        string $segundoNombre, 
        string $primerApellido, 
        string $segundoApellido, 
        string $email,
        string $fechaNac,
        string $contrasenna,
        bool $verificado,
        )//__metodos magicos
    {
        $this->ci=$ci;// this hace referencia al id de esta persona, porque se pueden crear varias pero cada una tiene su id
        $this->primerNombre=$primerNombre;
        $this->segundoNombre=$segundoNombre;
        $this->primerApellido=$primerApellido;
        $this->segundoApellido=$segundoApellido;
        $this->email=$email;
        $this->fechaNac=$fechaNac;
        $this->contrasenna=$contrasenna;
        $this->verificado=$verificado;
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
     * Get the value of primerNombre
     */ 
    public function getPrimerNombre()
    {
        return $this->primerNombre;
    }

    /**
     * Set the value of primerNombre
     *
     * @return  self
     */ 
    public function setPrimerNombre($primerNombre)
    {
        $this->primerNombre = $primerNombre;

        return $this;
    }

    /**
     * Get the value of segundoNombre
     */ 
    public function getSegundoNombre()
    {
        return $this->segundoNombre;
    }

    /**
     * Set the value of segundoNombre
     *
     * @return  self
     */ 
    public function setSegundoNombre($segundoNombre)
    {
        $this->segundoNombre = $segundoNombre;

        return $this;
    }

    /**
     * Get the value of primerApellido
     */ 
    public function getPrimerApellido()
    {
        return $this->primerApellido;
    }

    /**
     * Set the value of primerApellido
     *
     * @return  self
     */ 
    public function setPrimerApellido($primerApellido)
    {
        $this->primerApellido = $primerApellido;

        return $this;
    }

    /**
     * Get the value of segundoApellido
     */ 
    public function getSegundoApellido()
    {
        return $this->segundoApellido;
    }

    /**
     * Set the value of segundoApellido
     *
     * @return  self
     */ 
    public function setSegundoApellido($segundoApellido)
    {
        $this->segundoApellido = $segundoApellido;

        return $this;
    }

    /**
     * Get the value of email
     */ 
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set the value of email
     *
     * @return  self
     */ 
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get the value of fechaNac
     */ 
    public function getFechaNac()
    {
        return $this->fechaNac;
    }

    /**
     * Set the value of fechaNac
     *
     * @return  self
     */ 
    public function setFechaNac($fechaNac)
    {
        $this->fechaNac = $fechaNac;

        return $this;
    }

    /**
     * Get the value of contrasenna
     */ 
    public function getContrasenna()
    {
        return $this->contrasenna;
    }

    /**
     * Set the value of contrasenna
     *
     * @return  self
     */ 
    public function setContrasenna($contrasenna)
    {
        $this->contrasenna = hash("sha512", $contrasenna);

        return $this;
    }

    /**
     * Get the value of verificado
     */ 
    public function getVerificado()
    {
        return $this->verificado;
    }

    /**
     * Set the value of verificado
     *
     * @return  self
     */ 
    public function setVerificado($verificado)
    {
        $this->verificado = $verificado;

        return $this;
    }
}

?>