import axios from "axios";
import { Button, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function AdminTable() {
  const [helicopterData, setHelicopterData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchHelicopterData();
  }, [refresh]);

  const fetchHelicopterData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://6725e6d1c39fedae05b634be.mockapi.io/learning/api/productList"
      );
      const data = await response.json();
      setHelicopterData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleDelete = async (heliId) => {
    try {
      await axios.delete(
        `https://6725e6d1c39fedae05b634be.mockapi.io/learning/api/productList/${heliId}`
      );
      alert("Delete successfully!");
      setRefresh((prev) => prev + 1);
    } catch (error) {
      console.error(error);
    }
  };
  const handleEdit = async (helicopter) => {
    navigate("/admin/Edit-Helicopter", {
      state: { helicopterData: helicopter },
    });
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Image</Table.HeadCell>
          <Table.HeadCell>Manufacture</Table.HeadCell>
          <Table.HeadCell>Engine</Table.HeadCell>
          <Table.HeadCell>Avionic System</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {helicopterData.map((item) => (
            <Table.Row
              key={item.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {item?.name}
              </Table.Cell>
              <Table.Cell>
                <img className="w-10 h-10" src={item?.image} />
              </Table.Cell>
              <Table.Cell>{item?.manufacture}</Table.Cell>
              <Table.Cell>{item?.engine}</Table.Cell>
              <Table.Cell>{item?.system}</Table.Cell>
              <Table.Cell>${item?.price.toLocaleString() || "0.00"}</Table.Cell>
              <Table.Cell className="flex">
                <Button className="w-1/2" onClick={() => handleEdit(item)}>
                  Edit
                </Button>
                <Button className="w-1/2" onClick={() => handleDelete(item.id)}>
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
