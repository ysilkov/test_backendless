import React from "react";
import { Link } from "react-router-dom";

const Tab = ({ tab }) => <Link to={`/${tab.id}`}>{tab.title}</Link>;

export default Tab;
