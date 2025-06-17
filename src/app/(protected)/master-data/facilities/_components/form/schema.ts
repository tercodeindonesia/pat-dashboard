import zod from "@/libs/zod";

const BaseSchema = zod.object({
  facility_name: zod
    .string({ error: "Nama Fasilitas harus diisi" })
    .min(1, { error: "Nama Fasilitas harus diisi" }),
  equipment_list: zod
    .array(
      zod.object({
        name: zod.string().min(1, "Nama perlengkapan wajib diisi"),
      }),
    )
    .min(1, "List Perlengkapan harus diisi minimal 1 item"),
  parking_info: zod
    .string({ error: "Info Parkir harus diisi" })
    .min(1, { error: "Info Parkir harus diisi" }),
});

export const FacilitiesSchema = BaseSchema;
export type TFacilitiesFormData = zod.infer<typeof FacilitiesSchema>;
