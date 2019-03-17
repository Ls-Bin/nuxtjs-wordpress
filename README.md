# nuxt + wordpress

> [nuxt](https://zh.nuxtjs.org/) + [wordpress rest api](https://developer.wordpress.org/rest-api/)

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

## Wordpress setting
```
add posts featured image
/wp-includes/functions.php

function post_fetured_image_json( $data, $post, $context ) {
	$featured_image_id = $data->data['featured_media']; // get featured image id
	$featured_image_srcset = wp_get_attachment_image_srcset( $featured_image_id ); // get image srcset
	$featured_image_url = wp_get_attachment_image_src( $featured_image_id, 'original' ); // get url of the original size

	if( $featured_image_url ) {
			$data->data['featured_image']['url'] =$featured_image_url[0];
			$data->data['featured_image']['width'] =$featured_image_url[1];
			$data->data['featured_image']['height'] =$featured_image_url[2];
	}
	if( $featured_image_srcset ){
		$data->data['featured_image_srcset'] = $featured_image_srcset;
	}

	return $data;
}
add_filter( 'rest_prepare_post', 'post_fetured_image_json', 10, 3 );


```

