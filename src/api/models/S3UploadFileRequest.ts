/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type S3UploadFileRequest = {
    scanFileContent: string;
    contentType: string;
    env: string;
    product: string;
    subProduct: string;
    scanTool: S3UploadFileRequest.scanTool;
    toolId?: string;
    triggerby?: S3UploadFileRequest.triggerby;
    toolConfigId?: number;
    toolType?: S3UploadFileRequest.toolType;
    productName?: string;
    subProductName?: string;
    directory?: string;
    fileName?: string;
};

export namespace S3UploadFileRequest {

    export enum scanTool {
        JFROG_XRAY = 'JFROG_XRAY',
        SONARQUBE = 'SONARQUBE',
        ZAP = 'ZAP',
        BANDIT = 'BANDIT',
        BURPSUITE = 'BURPSUITE',
        DEPENDENCY_CHECK = 'DEPENDENCY_CHECK',
        ESLINT = 'ESLINT',
        BLACKDUCK_HUB = 'BLACKDUCK_HUB',
        GOSEC_SCANNER = 'GOSEC_SCANNER',
        QUALYS = 'QUALYS',
        QUALYS_WEBAPP = 'QUALYS_WEBAPP',
        QUALYS_INFRASTRUCTURE = 'QUALYS_INFRASTRUCTURE',
        ACUNETIX = 'ACUNETIX',
        APPSPIDER = 'APPSPIDER',
        AQUA = 'AQUA',
        AWS_PROWLER = 'AWS_PROWLER',
        AWS_SECURITY_HUB = 'AWS_SECURITY_HUB',
        BRAKEMAN = 'BRAKEMAN',
        BUGCROWD = 'BUGCROWD',
        CLAIR = 'CLAIR',
        COBALT = 'COBALT',
        CONTRAST_SECURITY = 'CONTRAST_SECURITY',
        GITLEAKS = 'GITLEAKS',
        MOZILLA_OBSERVATORY = 'MOZILLA_OBSERVATORY',
        NESSUS = 'NESSUS',
        NETSPARKER = 'NETSPARKER',
        NIKTO = 'NIKTO',
        NMAP = 'NMAP',
        OPENVAS_CSV = 'OPENVAS_CSV',
        TRUSTWAVE = 'TRUSTWAVE',
        WHITESOURCE = 'WHITESOURCE',
        WEBINSPECT = 'WEBINSPECT',
        VERACODE = 'VERACODE',
        APPSCAN = 'APPSCAN',
        HACKERONE = 'HACKERONE',
        NOW_SECURE = 'NOW_SECURE',
        CHECKMARX = 'CHECKMARX',
        FORTIFY = 'FORTIFY',
        COVERITY = 'COVERITY',
        SNYK = 'SNYK',
        SHIFTLEFT = 'SHIFTLEFT',
        PRISMA_CLOUD_TWISTLOCK = 'PRISMA_CLOUD_TWISTLOCK',
        METASPLOIT = 'METASPLOIT',
        DEPENDENCY_TRACK = 'DEPENDENCY_TRACK',
        CYCLONE_DX = 'CYCLONE_DX',
        RAPID7_NEXPOSE = 'RAPID7_NEXPOSE',
        DETECT_SECRETS = 'DETECT_SECRETS',
        DEPENDABOT = 'DEPENDABOT',
        GITHUB_CODE_SCAN = 'GITHUB_CODE_SCAN',
        SONARCLOUD = 'SONARCLOUD',
        PRISMA_CLOUD_REDLOCK = 'PRISMA_CLOUD_REDLOCK',
        GOOGLE_CLOUD_REGISTRY = 'GOOGLE_CLOUD_REGISTRY',
        LACEWORK = 'LACEWORK',
        AVOCADO = 'AVOCADO',
        FINITESTATE = 'FINITESTATE',
    }

    export enum triggerby {
        PUSH_UPLOAD = 'PUSH_UPLOAD',
        MANUAL_TRIGGER = 'MANUAL_TRIGGER',
        SCHEDULED = 'SCHEDULED',
        UI_UPLOAD = 'UI_UPLOAD',
        WEBHOOK = 'WEBHOOK',
    }

    export enum toolType {
        PULL = 'PULL',
        PUSH = 'PUSH',
        SCAN_UPLOAD = 'SCAN_UPLOAD',
        WEBHOOK = 'WEBHOOK',
    }


}

