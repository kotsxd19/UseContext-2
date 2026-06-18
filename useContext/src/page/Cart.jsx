import React from "react";
 
import DataTestForm from "../components/DataTestForm";
import DataTestList from "../components/DataTestList";
import useDataTest from "../hooks/useDataTest";
 
const Contact = () => {
  const {
    activeTab,
    setActiveTab,
    dataTest,
    loading,
    submitting,
    error,
    mensaje,
    message,
    setmessage,
    status,
    setStatus,
    openCreateForm,
    handleEdit,
    handleSubmit,
    handleDelete,
  } = useDataTest();
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-50 px-4 py-10">
      <div className="mx-auto w-full max-w-6xl space-y-6">
 
        {activeTab === "form" ? (
          <DataTestForm
            message={message}
            status={status}
            setName={setName}
            age={age}
            setAge={setAge}
            onSubmit={handleSubmit}
            onCancel={() => setActiveTab("list")}
            submitting={submitting}
            error={error}
            message={message}
          />
        ) : (
          <DataTestList
            dataTest={dataTest}
            loading={loading}
            error={error}
            onAdd={openCreateForm}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
};
 
export default Contact;