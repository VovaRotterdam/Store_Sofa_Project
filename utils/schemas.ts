import * as z from "zod";

export const productSchema = z.object({
    name: z
        .string()
        .min(2, { message: "name must be at least 2 characters." })
        .max(100, { message: "name must be less than 100 characters." }),
    company: z.string(),
    price: z.coerce
        .number()
        .int()
        .min(0, { message: "price nust be a positive number." }),
    description: z.string().refine(
        (description) => {
            const wordCount = description.split(" ").length;
            return wordCount >= 10 && wordCount <= 1000;
        },
        {
            message: "description must be between 10 and 1000 words.",
        }
    ),
    featured: z.coerce.boolean(),
});

export function validateWithZodSchema<T>(
    schema: z.ZodSchema<T>,
    data: unknown
): { success: true; data: T } | { success: false; errors: string[] } {
    const result = schema.safeParse(data);
    if (!result.success) {
        const errors = result.error.issues.map((error) => error.message);

        return { success: false, errors };
    }
    return { success: true, data: result.data };
}

export const imageSchema = z.object({
    image: validateImageFile(),
});

export function validateImageFile() {
    const maxUploadSize = 1024 * 1024;
    const acceptedFileTypes = ["image/"];
    return z
        .instanceof(File)
        .refine((file) => {
            return !file || file.size <= maxUploadSize;
        }, "File size must be less than 1MB")
        .refine((file) => {
            return (
                !file ||
                acceptedFileTypes.some((type) => file.type.startsWith(type))
            );
        }, "File must be an image");
}
