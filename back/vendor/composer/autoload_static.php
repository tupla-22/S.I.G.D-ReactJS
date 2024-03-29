<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInite7d0c1cf781815d2faaba7181db077c1
{
    public static $prefixLengthsPsr4 = array (
        'F' => 
        array (
            'Firebase\\JWT\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Firebase\\JWT\\' => 
        array (
            0 => __DIR__ . '/..' . '/firebase/php-jwt/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInite7d0c1cf781815d2faaba7181db077c1::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInite7d0c1cf781815d2faaba7181db077c1::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInite7d0c1cf781815d2faaba7181db077c1::$classMap;

        }, null, ClassLoader::class);
    }
}
