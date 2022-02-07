export class EnvUtil {
    public static getBaseUrl(): string {
        return process.env.BASE_URL || 'http://localhost:3001/'
    }
}