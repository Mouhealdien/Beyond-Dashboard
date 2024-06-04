import Link from "next/link";
import React from "react";

type propsType = {
  headers?: string[];
  data?: any;
  editLink?: string;
};
const DashboradTable = ({ headers, data, editLink }: propsType) => {
  return (
    <div className="relative max-w-[1000px] m-auto overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-fourth">
        <thead className="text-xs text-white uppercase bg-primary">
          <tr>
            {headers?.map((e, i) => {
              return (
                <th key={i} scope="col" className="px-6 py-3">
                  {e}
                </th>
              );
            })}
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((ob: {}, i: number) => {
            return (
              <tr
                key={i}
                className="odd:bg-white odd:text-fourth even:text-white even:bg-primary border-b "
              >
                {Object.keys(ob).map((prop, propIndex) => {
                  if (prop != "_id")
                    return (
                      <td key={propIndex} className="px-6 py-4">
                        {` ${ob[prop]["en"] ? ob[prop]["en"] : ob[prop]}`}
                      </td>
                    );
                })}

                <td className="px-6 py-4">
                  <Link
                    href={`${editLink}/${ob?._id}`}
                    className="font-medium  text-red-600 bg-white px-2 py-1 rounded-full   hover:underline"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DashboradTable;
