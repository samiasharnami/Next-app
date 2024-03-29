import { z } from 'zod';

const schema = z.object({
    name: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
      }).min(3),
});

export default schema;