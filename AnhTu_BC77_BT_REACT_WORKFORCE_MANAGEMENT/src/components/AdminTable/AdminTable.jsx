import { Table } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchEmployee,
  deleteEmployee,
  setSelectedEmployee,
} from "../../ReduxEmployee/EmployeeSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export function AdminTable() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employeeState = useSelector((state) => state.employees);
  const employees = employeeState.list;
  const loading = employeeState.loading;
  const error = employeeState.error;

  useEffect(() => {
    dispatch(fetchEmployee());
  }, [dispatch]);

  const calculatedSalary = (employee) => {
    return (
      employee.luongCoBan *
      employee.heSoChucVu *
      (employee.soGioLamTrongThang / 160)
    );
  };

  const handleEdit = (employee) => {
    dispatch(setSelectedEmployee(employee));
    navigate("/employee-form");
  };

  if (loading) return <div>Stand By...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="overflow-x-auto">
      <Table className="text-base" hoverable>
        <Table.Head>
          <Table.HeadCell>Employee ID</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>Base Salary</Table.HeadCell>
          <Table.HeadCell>Final Salary</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {employees.map((employee) => (
            <Table.Row
              key={employee.maNhanVien}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {employee.maNhanVien}
              </Table.Cell>
              <Table.Cell>{employee.tenNhanVien}</Table.Cell>
              <Table.Cell>{employee.chucVu}</Table.Cell>
              <Table.Cell>
                ${employee.luongCoBan?.toLocaleString() || "0"}
              </Table.Cell>
              <Table.Cell>
                ${calculatedSalary(employee)?.toLocaleString() || "0"}
              </Table.Cell>
              <Table.Cell className="flex gap-5">
                <button
                  onClick={() => handleEdit(employee)}
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(deleteEmployee(employee.maNhanVien))}
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
