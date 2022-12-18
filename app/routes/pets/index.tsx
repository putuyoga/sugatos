import dayjs from "dayjs";
import { json } from "@remix-run/node";
import type { SerializeFrom } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import PetSideMenu from "~/components/PetSideMenu";
import supabase from "~/services/supabase";
import { formatDue } from "~/utils/date.utils";
import * as icons from "~/components/icons";

export const loader = async () => {
  const { data: activities, error } = await supabase.from("activities").select(`
       id, type(name), due, date
    `);
  const { data: pets, error } = await supabase.from("pets").select(`
       id, name
    `);

  return json({
    pets: pets || [],
    activities: (activities || []).map((activity) => ({
      ...activity,
      date: dayjs(activity.date).format("MMM DD"),
      due: formatDue(activity.due),
    })),
  });
};

export default function Posts() {
  const { pets, activities } = useLoaderData<typeof loader>();
  return (
    <main className="p-6 mt-10 max-w-5xl m-auto shadow-lg rounded bg-white">
      <section className="flex flex-row items-stretch justify-start">
        <PetSideMenu pets={pets} />
        <div className="flex flex-col items-stretch justify-start flex-1">
          <div className="flex flex-row items-center justify-between pb-8">
            <h2 className="text-lg font-medium">All Activities</h2>
            <button className="self-end focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
              <p className="text-sm font-medium leading-none text-white">
                Add Activity
              </p>
            </button>
          </div>
          <ActivityTable activities={activities} />
        </div>
      </section>
    </main>
  );
}

interface ActivityTableProps {
  activities: SerializeFrom<typeof loader>["activities"];
}
function ActivityTable(props: ActivityTableProps) {
  return (
    <table className="w-full table-auto whitespace-nowrap">
      <tbody>
        {props.activities.map((activity) => (
          <ActivityTableRow key={activity.id} {...activity} />
        ))}
      </tbody>
    </table>
  );
}

type ActivityTableRowProps = SerializeFrom<typeof loader>["activities"][0];
function ActivityTableRow(props: ActivityTableRowProps) {
  return (
    <>
      <tr
        tabIndex={0}
        className="flex flex-row items-center focus:outline-none h-10 border border-gray-100 rounded"
      >
        <NameColumn>{props.type?.name || ""}</NameColumn>
        <DateColumn due={props.due} date={props.date} />
      </tr>
      <tr className="h-3"></tr>
    </>
  );
}

const NameColumn = (props) => (
  <td className="flex-1 focus:text-indigo-600 ">
    <div className="flex items-center pl-5">
      <p className="text-base font-medium leading-none text-gray-700 mr-2">
        {props.children}
      </p>
    </div>
  </td>
);

const DateColumn = (props) => (
  <td className="pl-5 min-w-1/4 flex flex-row items-center justify-start">
    {!props.due ? (
      <p className="flex flex-row justify-center items-center text-sm leading-none text-gray-600 ml-2">
        <icons.date classNames={"mr-2"} />
        {props.date}
      </p>
    ) : (
      <button
        className={`py-2 px-4 text-sm leading-none rounded focus:outline-none text-gray-700 bg-gray-100`}
      >
        Due {props.due}
      </button>
    )}
  </td>
);
