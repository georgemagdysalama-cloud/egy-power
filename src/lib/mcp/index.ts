import { defineMcp } from "@lovable.dev/mcp-js";
import getCompanyInfoTool from "./tools/get-company-info";
import listProductsTool from "./tools/list-products";
import listProjectsTool from "./tools/list-projects";
import listServicesTool from "./tools/list-services";

export default defineMcp({
  name: "egy-power-connect",
  title: "Egy Power Connect",
  version: "0.1.0",
  instructions:
    "Public tools for Egy Power, an Egyptian supplier of electrical materials for contractors and industrial projects. Use `list_product_categories` for the catalog of conduits, cables, PVC, cable tray, panels and earthing systems; `list_services` for what the company offers; `list_projects` for reference projects; and `get_company_info` for the profile and contact details. All tools accept a `language` of 'ar' or 'en'.",
  tools: [listProductsTool, listServicesTool, listProjectsTool, getCompanyInfoTool],
});