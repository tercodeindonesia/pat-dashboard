import { useNotifications } from "@toolpad/core/useNotifications";

import { Page } from "@/app/_components/ui";
import { TTransactionRequest } from "@/api/transactions/type";

import TransactionForm from "../_components/form";
import useCreateTransaction from "./_hooks/use-create-transaction";
import { TTransactionFormData } from "../_components/form/schema";

const CreateTransactionPage = () => {
  const notification = useNotifications();

  const mutation = useCreateTransaction();

  const handleSubmit = (data: TTransactionFormData) => {
    const payload: TTransactionRequest = data;

    mutation.mutate(payload, {
      onSuccess: () => {
        notification.show("Berhasil menambahkan Transaksi", {
          severity: "success",
          autoHideDuration: 3000,
        });
      },
      onError: () => {
        notification.show("Gagal menambahkan Transkasi", {
          severity: "error",
          autoHideDuration: 3000,
        });
      },
    });
  };

  return (
    <Page
      title="Data Transaksi"
      breadcrumbs={[
        {
          label: "Transaksi",
          path: "/transactions",
        },
        {
          label: "Tambah Transaksi",
          path: null,
        },
      ]}
    >
      <TransactionForm loading={false} handleSubmit={handleSubmit} defaultValues={{}} />
    </Page>
  );
};

export default CreateTransactionPage;
