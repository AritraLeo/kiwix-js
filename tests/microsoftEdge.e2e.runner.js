import { Builder } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/edge.js';
import legacyRayCharles from './legacy-ray_charles.e2e.spec.js';

/* eslint-disable camelcase */

async function loadMSEdgeDriver () {
    const options = new Options();
    // Run it headless if the environment variable GITHUB_ACTIONS is set
    if (process.env.GITHUB_ACTIONS) {
        options.addArguments('--headless=new');
    }
    const driver = await new Builder(options)
        .forBrowser('MicrosoftEdge')
        .setEdgeOptions(options)
        .build();
    return driver;
};

const driver_edge = await loadMSEdgeDriver();

legacyRayCharles.runTests(driver_edge);
