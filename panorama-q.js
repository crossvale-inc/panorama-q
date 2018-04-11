;((global, factory) => {

    typeof exports === 'object' && typeof module !== 'undefined'
		? module.exports = factory()
		: typeof define === 'function' && define.amd
			? define(factory)
			: global.moment = factory();

}(this, (() => { 'use strict';

  const contexts = new WeakMap();
  const key = Symbol();

	return class PanoramaQ {
    static get environments() {
      return {
          dev: {
            baseUrl: 'https://jsonplaceholder.typicode.com'
          },
          prd: {
            baseUrl: 'https://jsonplaceholder.typicode.com'
          }
        };
    }

    static dev() {
      return new PanoramaQ(key, PanoramaQ.environments.dev);
    }

    static prd() {
      return new PanoramaQ(key, PanoramaQ.environments.prd);
    }

    constructor(_key, context) {
      if(key !== _key) {
        throw new Error('Cannot instantiate PanoramaQ directly. Try PanoramaQ.dev() or PanoramaQ.prd() instead.');
      }
      contexts.set(this, context);
    }

    get(uri) {
      const {baseUrl} = contexts.get(this);

  		return fetch(baseUrl)
              .then(response => response.json());
    }

    post(uri) {
      const {baseUrl} = contexts.get(this);

      return fetch(baseUrl, {
                body: JSON.stringify(data), // must match 'Content-Type' header
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, same-origin, *omit
                headers: {
                  'content-type': 'application/json'
                },
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, cors, *same-origin
                redirect: 'follow', // manual, *follow, error
                referrer: 'no-referrer', // *client, no-referrer
              })
              .then(response => response.json());
    }
	};

})));

