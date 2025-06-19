import zod from "@/libs/zod";

const facilitiesSchema = zod.object({
  id: zod.number(),
  title: zod.string(),
  checked: zod.boolean(),
});

const BaseSchema = zod.object({
  name: zod.string({ error: "Nama Paket harus diisi" }).min(1, { error: "Nama Paket harus diisi" }),
  starting_price: zod
    .string({ error: "Harga Mulai harus diisi" })
    .min(1, { error: "Harga Mulai harus diisi" }),
  type: zod.object(
    {
      value: zod.string({ error: "Type Paket harus diisi" }),
      label: zod.string(),
    },
    { error: "Type Paket harus diisi" },
  ),
  facilities: zod.array(facilitiesSchema).min(1, { error: "Pilih minimal 1 fasilitas" }),
  contents: zod.string({ error: "Deskripsi harus diisi" }),
  thumbnail: zod
    .string({ error: "Thumbnail harus diisi" })
    .min(1, { message: "Thumbnail harus diisi" }),
  image: zod.string({ error: "Image harus diisi" }).min(1, { message: "Image harus diisi" }),
  portfolio: zod
    .string({ error: "Portofolio harus diisi" })
    .min(1, { message: "Portfolio harus diisi" }),
  video: zod.string({ error: "Video harus diisi" }).min(1, { message: "Video harus diisi" }),
});

export const WeddingPackagesSchema = BaseSchema;
export type TFacilitiesForm = zod.infer<typeof facilitiesSchema>;
export type TWeddingPackagesFormData = zod.infer<typeof WeddingPackagesSchema>;
