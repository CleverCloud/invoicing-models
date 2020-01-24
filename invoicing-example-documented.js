console.log(
   JSON.stringify(
      {
         /* Policies define prices for different categories */
         "policies": [
            {
               /* A policy is defined for an owner and an optional zone (= region) */
               "owner_id": "orga_foobar",
               "zone": {"string": "gravelines"},
               "runtime_prices": [
                  {
                     /* A runtime price is identified by a "flavor" name
                      * A flavor defines the resources for an instance:
                      *  - vCPUs
                      *  - RAM
                      *  - Disk
                      *  - GPUs
                      *
                      *  Here, we only have the name of the flavor.
                      */
                     "flavor": "XS",
                     /* Time in second the price applies to */
                     "time_unit": 1,
                     /* List of price per supported currency */
                     "prices": [ { "currency": "EUR", "price": 0.001 }, { "currency": "USD", "price": 0.0012 } ]
                  },
                  {
                     "flavor": "S",
                     "time_unit": 1,
                     "prices": [ { "currency": "EUR", "price": 0.002 }, { "currency": "USD", "price": 0.0024 } ]
                  },
                  {
                     "flavor": "M",
                     "time_unit": 1,
                     "prices": [ { "currency": "EUR", "price": 0.004 }, { "currency": "USD", "price": 0.0048 } ]
                  }
               ],
               "runtime_options": [
                  /* A runtime option can be added to an instance that has extra
                   * properties.
                   *
                   * E.g. If we add extra disk to an instance, we add the option
                   * "extra_disk_1g".
                   *
                   * Options can be of type "ADD", so we add to the default price or of
                   * type "FACTOR", we multiply the default price by its value.
                   */
                  { "option_name": "extra_disk_1g", "mod_type": "ADD", "value": 0.5 },
                  { "option_name": "encrypted_disk", "mod_type": "FACTOR", "value": 1.1 }
               ],
               "byte_prices": [
                  /* A byte price is about storage:
                   *
                   * A "service" has price_plans to handle decreasing price per usage.
                   */
                  {
                     "service": "cellar",
                     "price_plans": [
                        /* A price plan is filtered by max_quantity.
                         *
                         * The "quantity" is a quantity of "data_unit".
                         * The price is for the quantity of "data_unit" over "time_unit"
                         * duration.
                         *
                         * When calculating the price, we choose the plan that has
                         * the lowest "max_quantity" that's greater than the current
                         * size. We then apply the price to the datasize.
                         */
                        {
                           "data_unit": "MB",
                           "time_unit": "month",
                           "max_quantity": {"int": 100},
                           "prices": [ { "currency": "EUR", "price": 0 }, { "currency": "USD", "price": 0 } ]
                        },
                        {
                           "data_unit": "MB",
                           "time_unit": "month",
                           "max_quantity": {"int": 102400},
                           "prices": [ { "currency": "EUR", "price": 0.009 }, { "currency": "USD", "price": 0.011 } ]
                        },
                        {
                           "data_unit": "MB",
                           "time_unit": "month",
                           "max_quantity": {"int": 10485760},
                           "prices": [ { "currency": "EUR", "price": 0.007 }, { "currency": "USD", "price": 0.0082 } ]
                        },
                        {
                           "data_unit": "MB",
                           "time_unit": "month",
                           "max_quantity": null,
                           "prices": [ { "currency": "EUR", "price": 0.004 }, { "currency": "USD", "price": 0.0048 } ]
                        }
                     ]
                  },
                  {
                     "service": "fsbucket",
                     "price_plans": [
                        {
                           "data_unit": "MB",
                           "time_unit": "month",
                           "max_quantity": {"int": 100},
                           "prices": [ { "currency": "EUR", "price": 0 }, { "currency": "USD", "price": 0 } ]
                        },
                        {
                           "data_unit": "MB",
                           "time_unit": "month",
                           "max_quantity": null,
                           "prices": [ { "currency": "EUR", "price": 0.05 }, { "currency": "USD", "price": 0.06 } ]
                        }
                     ]
                  }
               ]
            },
            {
               "owner_id": "orga_foobar",
               "zone": null,
               "runtime_prices": [
                  {
                     "flavor": "XS",
                     "time_unit": 1,
                     "prices": [ { "currency": "EUR", "price": 0.01 }, { "currency": "USD", "price": 0.012 } ]
                  },
                  {
                     "flavor": "S",
                     "time_unit": 1,
                     "prices": [ { "currency": "EUR", "price": 0.02 }, { "currency": "USD", "price": 0.024 } ]
                  },
                  {
                     "flavor": "M",
                     "time_unit": 1,
                     "prices": [ { "currency": "EUR", "price": 0.04 }, { "currency": "USD", "price": 0.048 } ]
                  }
               ],
               "runtime_options": [
                  { "option_name": "extra_disk_1g", "mod_type": "ADD", "value": 0.5 },
                  { "option_name": "encrypted_disk", "mod_type": "FACTOR", "value": 1.1 }
               ],
               "byte_prices": [
                  {
                     "service": "cellar",
                     "price_plans": [
                        {
                           "data_unit": "MB",
                           "time_unit": "month",
                           "max_quantity": {"int": 100},
                           "prices": [ { "currency": "EUR", "price": 0 }, { "currency": "USD", "price": 0 } ]
                        },
                        {
                           "data_unit": "MB",
                           "time_unit": "month",
                           "max_quantity": {"int":102400},
                           "prices": [ { "currency": "EUR", "price": 0.09 }, { "currency": "USD", "price": 0.11 } ]
                        },
                        {
                           "data_unit": "MB",
                           "time_unit": "month",
                           "max_quantity": {"int":10485760},
                           "prices": [ { "currency": "EUR", "price": 0.07 }, { "currency": "USD", "price": 0.082 } ]
                        },
                        {
                           "data_unit": "MB",
                           "time_unit": "month",
                           "max_quantity": null,
                           "prices": [ { "currency": "EUR", "price": 0.04 }, { "currency": "USD", "price": 0.048 } ]
                        }
                     ]
                  },
                  {
                     "service": "fsbucket",
                     "price_plans": [
                        {
                           "data_unit": "MB",
                           "time_unit": "month",
                           "max_quantity": {"int": 100},
                           "prices": [ { "currency": "EUR", "price": 0 }, { "currency": "USD", "price": 0 } ]
                        },
                        {
                           "data_unit": "MB",
                           "time_unit": "month",
                           "max_quantity": null,
                           "prices": [ { "currency": "EUR", "price": 0.5 }, { "currency": "USD", "price": 0.6 } ]
                        }
                     ]
                  }
               ]
            }
         ],
         /* Consumptions are whet we actually measured of the "owner"'s platform usage:
          *  - Running instances
          *  - Stored data
          *  - network usage
          *  - …
          */
         "consumptions": [
            {
               /* That means we need to apply a "byte policy" on that measure. */
               "com.clevercloud.invoicing.byte_consumption": {
                  "owner_id": "orga_foobar",
                  "zone": "gravelines",
                  /* That selects which byte policy to use */
                  "service_type": "cellar",
                  "service_id": "cellar_xxx",
                  "byte_consumptions": [
                     /* Represents a "mean" measure of "data_unit" of data between
                      * "start_at" and "end_at".
                      */
                     {
                        "start_at": "2020-01-12T00:00:00.000Z",
                        "end_at": "2020-01-12T23:59:59.999Z",
                        "data_unit": "MB",
                        "size": 12
                     },
                     {
                        "start_at": "2020-01-13T00:00:00.000Z",
                        "end_at": "2020-01-13T23:59:59.999Z",
                        "data_unit": "MB",
                        "size": 8
                     },
                     {
                        "start_at": "2020-01-14T00:00:00.000Z",
                        "end_at": "2020-01-14T23:59:59.999Z",
                        "data_unit": "MB",
                        "size": 500
                     },
                     {
                        "start_at": "2020-01-15T00:00:00.000Z",
                        "end_at": "2020-01-15T23:59:59.999Z",
                        "data_unit": "MB",
                        "size": 8388700
                     },
                     {
                        "start_at": "2020-01-16T00:00:00.000Z",
                        "end_at": "2020-01-16T23:59:59.999Z",
                        "data_unit": "MB",
                        "size": 8388700
                     },
                     {
                        "start_at": "2020-01-17T00:00:00.000Z",
                        "end_at": "2020-01-17T23:59:59.999Z",
                        "data_unit": "MB",
                        "size": 19922944
                     }
                  ]
               }
            },
            {
               /* That means we need to apply a "runtime policy" on that measure */
               "com.clevercloud.invoicing.runtime_consumption": {
                  "owner_id": "orga_foobar",
                  "zone": "gravelines",
                  "service_id": "app_xxx",
                  "runtime_consumptions": [
                     /* Represents the runtime of one instance.
                      * The instance is of flavor "X", running between "start_at" and
                      * "end_at".
                      *
                      * In one invoicing object, we should only see an "instance_id" once.
                      * start_at and end_at are not always the start and stop timestamps
                      * of the instance, but the start and end timestamps of the measure.
                      *
                      * If an instance is still running after the end of the month, the
                      * end_at value will be "last second of the month".
                      */
                     {
                        "flavor_id": "S",
                        "instance_id": "b7c810fd-f8eb-414b-85d2-151195799341",
                        "start_at": "2020-01-12T10:29:04.000Z",
                        "end_at": "2020-01-20T14:03:12.000Z",
                        "options": []
                     },
                     {
                        "flavor_id": "XS",
                        "instance_id": "e24230d7-a44b-4878-a21d-0e12345aabf0",
                        "start_at": "2020-01-20T13:58:01.000Z",
                        "end_at": "2020-01-31T23:59:59.999Z",
                        "options": []
                     },
                     {
                        "flavor_id": "XS",
                        "instance_id": "3b0be24e-b222-4873-b8fc-df4df8aa3c3c",
                        "start_at": "2020-01-20T13:58:01.000Z",
                        "end_at": "2020-01-31T23:59:59.999Z",
                        "options": []
                     }
                  ]
               }
            },
            {
               "com.clevercloud.invoicing.runtime_consumption": {
                  "owner_id": "orga_foobar",
                  "zone": "par",
                  "service_id": "app_yyy",
                  "runtime_consumptions": [
                     {
                        "flavor_id": "M",
                        "instance_id": "f33ce73f-d2e3-412b-ad33-ecaac810a7c3",
                        "start_at": "2020-01-10T10:29:04.000Z",
                        "end_at": "2020-01-31T23:59:59.999Z",
                        "options": [ { "option_name": "extra_disk_1g", "quantity": 50 } ]
                     },
                  ]
               }
            }
         ],
         "extra_items": [
            /* Extra invoicing items. Will be found again in the "invoice" below. */
            { "owner_id": "orga_xxx", "description": "Manual intervention", "sub_description": "Installing a pulsar cluster", "currency": "EUR", "price": 1215.50 }
         ],
         /* What we actually bill.
          *
          * Use it if you just need to trust us and bill what we send.
          * If you don't want to use it, you can recompute the values from "policies" and
          * "consumptions", or even apply your own policy.
          */
         "invoice": {
            "owner_id": "orga_xxx",
            "items": [
               /* An invoice item is classic. */
               {
                  "currency": "EUR",
                  "unit_price": 60.50,
                  "quantity": 1,
                  "description": "Consumption price for app_xxx",
                  "sub_description": "Java application with a total of 3 instances running between 2020-01-12 and 2020-01-31"
               },
               {
                  "currency": "EUR",
                  "unit_price": 30.50,
                  "quantity": 1,
                  "description": "Consumption price for app_yyy",
                  "sub_description": "Java application with a total of 1 instances running between 2020-01-10 and 2020-01-31"
               },
               {
                  "currency": "EUR",
                  "unit_price": 23.01,
                  "quantity": 1,
                  "description": "Consumption price for cellar_xxx",
                  "sub_description": "Cellar add-on with an average of 5.97TB of storage and 2GB of network usage between 2020-01-12 and 2010-01-17"
               },
               {
                  "description": "Manual intervention",
                  "sub_description": "Installing a pulsar cluster",
                  "currency": "EUR",
                  "unit_price": 1215.50,
                  "quantity": 1
               }
            ]
         }
      }
   )
);
