import { Logger } from "winston";
import {
  OpenAPI,
  ProjectControllerService,
  ProjectJpaDto,
  FindingFiltersRequest,
  SubProductControllerService,
  SubProductResponseDto,
  ProductControllerService,
  ProductResponseDto,
  FindingsService,
  DescribeFindingResponse,
  ListFindingResponse,
} from "../api/index";

export class ArmorcodeRestApi {
  public constructor(
    private readonly logger: Logger,
    host: string,
    token: string
  ) {
    OpenAPI.TOKEN = token;
    OpenAPI.BASE = host;
  }

  public async getProductFindingStatus(
    findingId: number
  ): Promise<DescribeFindingResponse> {
    try {
      const status = FindingsService.describeFinding(findingId);
      return status;
    } catch (error) {
      throw error;
    }
  }

  public async getProducts(): Promise<ProductResponseDto[]> {
    try {
      const products = await ProductControllerService.getAllProduct();
      return products;
    } catch (error) {
      throw error;
    }
  }

  public async getProduct(id: number): Promise<ProductResponseDto> {
    try {
      const product = await ProductControllerService.getProduct1(id);
      return product;
    } catch (error) {
      throw error;
    }
  }

  public async getSubProducts(
    productId: number
  ): Promise<SubProductResponseDto[]> {
    try {
      const product = await SubProductControllerService.getSubProductByProduct(
        productId
      );
      return product;
    } catch (error) {
      throw error;
    }
  }

  public async getSubProduct(id: number): Promise<SubProductResponseDto> {
    try {
      const product = await SubProductControllerService.getSubProduct1(id);
      return product;
    } catch (error) {
      throw error;
    }
  }

  public async getCriticalProductFindings(
    productId: number
  ): Promise<ListFindingResponse> {
    try {
      this.logger.debug("Getting Vulnerabilities");

      const request: FindingFiltersRequest = {
        page: 0,
        size: 50,
        sortColumn: "severity",
        sortOrder: "desc",
        filters: {
          product: [productId],
          environmentName: ["Production"],
          status: ["OPEN", "ACCEPTRISK", "CONFIRMED"],
          severity: ["Critical"],
        },
        ticketStatusRequired: true,
        ignoreMitigated: true,
      };

      return FindingsService.listFindings(request);
    } catch (error) {
      throw error;
    }
  }

  public async getSubProductFindings(
    productId: number
  ): Promise<ListFindingResponse> {
    try {
      this.logger.debug("Getting Vulnerabilities");

      const request: FindingFiltersRequest = {
        page: 0,
        size: 50,
        sortColumn: "severity",
        sortOrder: "desc",
        filters: {
          product: [productId],
          environmentName: ["Production"],
          status: ["OPEN", "ACCEPTRISK", "CONFIRMED"],
        },
        ticketStatusRequired: true,
        ignoreMitigated: true,
      };

      return FindingsService.listFindings(request);
    } catch (error) {
      throw error;
    }
  }
}
