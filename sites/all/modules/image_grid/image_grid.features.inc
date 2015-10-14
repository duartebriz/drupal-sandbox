<?php
/**
 * @file
 * image_grid.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function image_grid_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function image_grid_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function image_grid_node_info() {
  $items = array(
    'inspiration' => array(
      'name' => t('Inspiration'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
