<?php

namespace Theme;

/**
 * class to interact with Prestashop API
 * TO DO: cache?
 */

class Prestashop
{

    public static $shop_api = 'https://kotyl.eu/module/fs_rest/';


    /**
     * TO DO: use guzzle for more control
     */
    public static function request($endpoint)
    {

        // $data = file_get_contents($endpoint);

        // if (!$data) {
        //     return false;
        // } else {
        //     return json_decode($data, true);
        // }

        $ch = curl_init($endpoint);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);  // follow redirects
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // disable SSL check if needed

        $response = curl_exec($ch);
        curl_close($ch);

        if ($response === false) {
            return 'no data';
        }

        $data = json_decode($response, true);

        return $data;
    }


    public static function getCategory($id_category, $show_products = true)
    {

        $url = self::$shop_api . 'category';
        $params = http_build_query(
            array(
                'id' => $id_category,
                'products' => $show_products,
            )
        );

        $data = self::request($url . '?' . $params);

        return $data;
    }


    public static function getCategories($id_category)
    {

        $url = self::$shop_api . 'categories';
        $params = http_build_query(
            array(
                'id' => $id_category
            )
        );

        $data = self::request($url . '?' . $params);

        return $data;
    }
}
