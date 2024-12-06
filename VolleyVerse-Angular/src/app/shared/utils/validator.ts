export class Validator {
    
    public static emailComprobation (email:string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    public static zipCodeComprobation (zip_code:string): boolean {
        const zipCodeRegex = /^\d{5}$/;
        return zipCodeRegex.test(zip_code);
    }
}
