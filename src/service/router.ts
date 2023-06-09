/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { errorHandler } from "@backstage/backend-common";
import express from "express";
import Router from "express-promise-router";
import { Logger } from "winston";
import { Config } from "@backstage/config";
import { ArmorcodeRestApi } from "../api/ArmorcodeRestApi";

export interface RouterOptions {
  logger: Logger;
  config: Config;
}

export async function createRouter(
  options: RouterOptions
): Promise<express.Router> {
  const { logger } = options;

  const config = options.config.getConfig("armorcode");
  const host = config.getString("host");
  const token = config.getString("token");

  const router = Router();
  router.use(express.json());

  router.get("/health", (_, response) => {
    logger.info("PONG!");
    response.json({ status: "ok" });
  });

  router.get("/products", async (_request, response) => {
    logger.verbose("getting products..");
    const armorcodeApi = new ArmorcodeRestApi(logger, host, token);
    const projects = await armorcodeApi.getProducts();
    response.json(projects);
  });

  router.get(
    "/products/:productId/findings/critical",
    async (_request, response) => {
      logger.verbose("getting critical findings..");
      const { productId } = _request.params;
      const armorcodeApi = new ArmorcodeRestApi(logger, host, token);
      const vulnarabilities = await armorcodeApi.getCriticalProductFindings(
        parseInt(productId, 10)
      );
      response.json(vulnarabilities);
    }
  );

  router.use(errorHandler());
  return router;
}
