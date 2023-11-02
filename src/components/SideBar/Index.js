import "./sidebar.css";
import DashboardIcon from "../Image/dashboard.png";
import InventoryIcon from "../Image/inventory.png";
import InvoiceIcon from "../Image/invoice.png";
import CustomerIcon from "../Image/customer.png";
import SalesIcon from "../Image/discount.png";
import BillIcon from "../Image/bill.png";
import PurchaseIcon from "../Image/cart.png";
import SupplierReturnIcon from "../Image/agreement.png";
import Supplier from "../Image/supplier.png";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-content">
          <NavLink to="/" >
            <img src={DashboardIcon} alt="dashboardIcon" className="iconImg" />
            <h3>Dashboard</h3>
          </NavLink>
        </div>
        <div className="sidebar-content">
          <NavLink to="/Inventory">
            <img src={InventoryIcon} alt="inventoryIcon" className="iconImg" />
            <h3>Inventory</h3>
          </NavLink>
        </div>
        <div className="sidebar-content">
          <NavLink to="/PurchaseTable">
            <img src={PurchaseIcon} alt="purchaseIcon" className="iconImg" />
            <h3>Purchase</h3>
          </NavLink>
        </div>
        <div className="sidebar-content">
          <NavLink to="/Return">
          <img src={SupplierReturnIcon} alt="supplierIcon" className="iconImg" />
            <h3>Return</h3>
          </NavLink>
        </div>
        <div className="sidebar-content">
          <NavLink to="/Invoice">
            <img src={InvoiceIcon} alt="invoiceIcon" className="iconImg" />
            <h3>Invoice</h3>
          </NavLink>
        </div>
        <div className="sidebar-content">
          <NavLink to="/Sales">
            <img src={SalesIcon} alt="salesIcon" className="iconImg" />
            <h3>Sales</h3>
          </NavLink>
        </div>
        <div className="sidebar-content">
          <NavLink to="/Bill">
            <img src={BillIcon} alt="billIcon" className="iconImg" />
            <h3>Bill</h3>
          </NavLink>
        </div>
        <div className="sidebar-content">
          <NavLink to="/Customer">
            <img src={CustomerIcon} alt="customerIcon" className="iconImg" />
            <h3>customer</h3>
          </NavLink>
        </div>
        <div className="sidebar-content">
          <NavLink to="/Supplier">
            <img src={Supplier} alt="supplierIcon" className="iconImg" />
            <h3>Supplier</h3>
          </NavLink>
        </div>
      </div>
    </>
  );
}
