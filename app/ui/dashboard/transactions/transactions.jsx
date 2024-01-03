import Image from "next/image";

const Transactions = () => {
  return (
    <div className="flex gap-5 flex-col ">
      <h2 className="font-semibold">Latst Transactions</h2>
      <table className="text-left bg-bgSoft shadow-sm rounded-lg divide-y divide-bg">
        <thead>
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Date</th>
            <th className="px-6 py-3">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="flex items-center gap-2 px-6 py-3">
              <Image
                src="/noavatar.png"
                alt="avatar"
                width={40}
                height={40}
                className="rounded-full bg-cover"
              />
              <span>Salah Mohsen</span>
            </td>
            <td className="px-6 py-3">
              <span>Pending</span>
            </td>
            <td className="px-6 py-3">03.01.2024</td>
            <td className="px-6 py-3">$3.20</td>
          </tr>
          <tr>
            <td className="flex items-center gap-2 px-6 py-3">
              <Image
                src="/noavatar.png"
                alt="avatar"
                width={40}
                height={40}
                className="rounded-full bg-cover"
              />
              <span>Salah Mohsen</span>
            </td>
            <td className="px-6 py-3">
              <span>Pending</span>
            </td>
            <td className="px-6 py-3">03.01.2024</td>
            <td className="px-6 py-3">$3.20</td>
          </tr>

          <tr>
            <td className="flex items-center gap-2 px-6 py-3">
              <Image
                src="/noavatar.png"
                alt="avatar"
                width={40}
                height={40}
                className="rounded-full bg-cover"
              />
              <span>Salah Mohsen</span>
            </td>
            <td className="px-6 py-3">
              <span>Pending</span>
            </td>
            <td className="px-6 py-3">03.01.2024</td>
            <td className="px-6 py-3">$3.20</td>
          </tr>

          <tr>
            <td className="flex items-center gap-2 px-6 py-3">
              <Image
                src="/noavatar.png"
                alt="avatar"
                width={40}
                height={40}
                className="rounded-full bg-cover"
              />
              <span>Salah Mohsen</span>
            </td>
            <td className="px-6 py-3">
              <span>Pending</span>
            </td>
            <td className="px-6 py-3">03.01.2024</td>
            <td className="px-6 py-3">$3.20</td>
          </tr>

          <tr>
            <td className="flex items-center gap-2 px-6 py-3">
              <Image
                src="/noavatar.png"
                alt="avatar"
                width={40}
                height={40}
                className="rounded-full bg-cover"
              />
              <span>Salah Mohsen</span>
            </td>
            <td className="px-6 py-3">
              <span>Pending</span>
            </td>
            <td className="px-6 py-3">03.01.2024</td>
            <td className="px-6 py-3">$3.20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
