import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, router} from "@inertiajs/react";

export default function index({auth, projects}) {
  return (
    <Authenticated
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Projects
        </h2>
      }
    >
      <Head title="Projects"/>
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">

              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                <tr className="text-nowrap">
                  <th className="px-3 py-3">ID</th>
                  <th className="px-3 py-3">Image</th>
                  <th className="px-3 py-3">Name</th>
                  <th className="px-3 py-2">Status</th>
                  <th className="px-3 py-2">Create Date</th>
                  <th className="px-3 py-2">Due Date</th>
                  <th className="px-3 py-2">Created By</th>
                  <th className="px-3 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {projects.data.map((projects) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-3 py-2">{projects.id}</td>
                    <td className="px-3 py-2">
                      <img src={projects.image_path} alt="" />
                    </td>
                    <td className="px-3 py-2">{projects.name}</td>
                    <td className="px-3 py-2">{projects.status}</td>
                    <td className="px-3 py-2">{projects.created_at}</td>
                    <td className="px-3 py-2">{projects.due_date}</td>
                    <td className="px-3 py-2">{projects.createdBy.name}</td>
                    <td className="px-3 py-2">
                      <link href={route('project.edit', projects.id)} className="font-medium text-blue-600
                      dark:text-blue-500 hover:underline mx-1">
                        Edit
                      </link>
                      <link href={route('project.destroy', projects.id)} className="font-medium text-red-600
                      dark:text-blue-500 hover:underline mx-1">
                        Delete
                      </link>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </Authenticated>
  )
}
