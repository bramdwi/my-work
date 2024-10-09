import { Truck, Package, BarChart3, Globe } from 'lucide-react';

const services = [
  {
    name: 'Transportation',
    description: 'Efficient and reliable transportation solutions for your goods.',
    icon: Truck,
  },
  {
    name: 'Warehousing',
    description: 'Secure storage and inventory management services.',
    icon: Package,
  },
  {
    name: 'Supply Chain Management',
    description: 'Optimize your supply chain with our expert solutions.',
    icon: BarChart3,
  },
  {
    name: 'International Logistics',
    description: 'Seamless global logistics services for your business.',
    icon: Globe,
  },
];

export default function Services() {
  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Comprehensive Logistics Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We offer a wide range of logistics services to meet your business needs.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.name} className="pt-6">
                <div className="flow-root bg-white rounded-lg shadow-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg">
                        <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{service.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}