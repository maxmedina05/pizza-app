    public static int binarySearch(List<Double> list, int l, int r, double x, double epsilon) {
        if(r >= l) {
            int mid = l + (r - l) / 2;
            double m_item = list.get(mid);
            
            if(m_item >= (x-epsilon) && m_item <= (x+epsilon)) {
                return mid;
            }
            
            if(list.get(mid) > x) {
                return binarySearch(list, l, mid-1, x, epsilon);
            }
            
            return binarySearch(list, mid+1, r, x, epsilon);
        }
        return -1;
    }
    
