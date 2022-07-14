<?php 


class Log{

    private $id;
    private $nombre;
    private $responseValue;
    private $requestValue;
    private $dateRequest;
    private $dateResponse;
    private $result;
    private $ci; //ci del usuario

    function __construct(
        $id,
        $nombre,
        $responseValue,
        $requestValue,
        $dateRequest,
        $dateResponse,
        $result,
        $ci, 
    )
    {
        $this->id=$id;
        $this->nombre=$nombre;
        $this->responseValue=$responseValue;
        $this->requestValue=$requestValue;
        $this->dateRequest=$dateRequest;
        $this->dateResponse=$dateResponse;
        $this->result=$result;
        $this->ci=$ci; 
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
     * Get the value of responseValue
     */ 
    public function getResponseValue()
    {
        return $this->responseValue;
    }

    /**
     * Set the value of responseValue
     *
     * @return  self
     */ 
    public function setResponseValue($responseValue)
    {
        $this->responseValue = $responseValue;

        return $this;
    }

    /**
     * Get the value of dateRequest
     */ 
    public function getDateRequest()
    {
        return $this->dateRequest;
    }

    /**
     * Set the value of dateRequest
     *
     * @return  self
     */ 
    public function setDateRequest($dateRequest)
    {
        $this->dateRequest = $dateRequest;

        return $this;
    }

    /**
     * Get the value of dateResponse
     */ 
    public function getDateResponse()
    {
        return $this->dateResponse;
    }

    /**
     * Set the value of dateResponse
     *
     * @return  self
     */ 
    public function setDateResponse($dateResponse)
    {
        $this->dateResponse = $dateResponse;

        return $this;
    }

    /**
     * Get the value of requestValue
     */ 
    public function getRequestValue()
    {
        return $this->requestValue;
    }

    /**
     * Set the value of requestValue
     *
     * @return  self
     */ 
    public function setRequestValue($requestValue)
    {
        $this->requestValue = $requestValue;

        return $this;
    }

    /**
     * Get the value of result
     */ 
    public function getResult()
    {
        return $this->result;
    }

    /**
     * Set the value of result
     *
     * @return  self
     */ 
    public function setResult($result)
    {
        $this->result = $result;

        return $this;
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
}


?>